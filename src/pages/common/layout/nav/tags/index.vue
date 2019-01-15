<template>
  <div class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        :key="tag.path"
        tag="span"
        class="tags-view-item"
        @click.middle.native="closeSelectedTag(tag)"
        @contextmenu.prevent.native="openMenu(tag,$event)"
     >
        <span class="tag-name">{{tag.name}}</span>
        <span class='tag-close'@click.prevent.stop="closeSelectedTag(tag)"> x</span>
      </router-link>
    </scroll-pane>
    <!--<ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">-->
      <!--<li @click="refreshSelectedTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>-->
      <!--<li @click="closeSelectedTag(selectedTag)">{{ $t('tagsView.close') }}</li>-->
      <!--<li @click="closeOthersTags">{{ $t('tagsView.closeOthers') }}</li>-->
      <!--<li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
import ScrollPane from '@/components/common/scroll-pane/index'
import {mapGetters} from 'vuex'
export default {
  name: 'index',
  components: {ScrollPane},
  computed: {
    ...mapGetters(['visitedViews'])
  },
  watch: {
    $route () {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.addViewTags()
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },
    addViewTags () {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('addView', this.$route)
      }
      return false
    },
    moveToCurrentTag () {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)

            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('updateVisitedView', this.$route)
            }

            break
          }
        }
      })
    },
    refreshSelectedTag (view) {
      this.$store.dispatch('delCachedView', view).then(() => {
        const { fullPath } = view
        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath
          })
        })
      })
    },
    closeSelectedTag (view) {
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          const latestView = visitedViews.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    closeOthersTags () {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags () {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    openMenu (tag, e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }
      this.top = e.clientY

      this.visible = true
      this.selectedTag = tag
    },
    closeMenu () {
      this.visible = false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .tags-view-container {
    /*height: 100%;*/
    /*width: 100%;*/
    .tags-view-wrapper {
      .tags-view-item {
        display: inline-block;
        position: relative;
        cursor: pointer;
        line-height: 32px;
        border-bottom: 1px solid rgba(215, 215, 215, 1);
        border-top: 1px solid rgba(215, 215, 215, 1);
        border-left: 1px solid rgba(215, 215, 215, 1);
        border-right: 1px solid rgba(215, 215, 215, 1);
        color: #495060;
        background: #fff;
        padding: 0 18px;
        font-size: 16px;
        margin-left: 5px;
        &:first-of-type {
          margin-left: 15px;
        }
        &:last-of-type {
          margin-right: 15px;
        }
        &.active {
          background-color: #f6f6f6;
          color: #333333;
          border-color: rgba(215, 215, 215, 1);
          border-bottom: 1px solid transparent;
          border-top: 1px solid rgba(215, 215, 215, 1);
          border-left: 1px solid rgba(215, 215, 215, 1);
          border-right: 1px solid rgba(215, 215, 215, 1);
        }
        .tag-name{
          /*vertical-align: middle;*/
        }
        .tag-close{
          vertical-align: middle;
          margib-right: 3px;
          font-size: 10px;
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 15px;
          border-radius: 50%;
          text-align: center;
          transition: all .3s cubic-bezier(.645, .045, .355, 1);
          transform-origin: 100% 50%;
          /*background-color: #b4bccc;*/
          &:hover{
            background-color: #b4bccc;
            color: #fff;

          }
        }
      }
    }
    .contextmenu {
      margin: 0;
      background: #fff;
      z-index: 100;
      position: absolute;
      list-style-type: none;
      padding: 5px 0;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>

<!--<style rel="stylesheet/scss" lang="scss">-->
  <!--//reset element css of el-icon-close-->
  <!--.tags-view-wrapper {-->
    <!--.tags-view-item {-->
      <!--font-size: 0px;-->
      <!--.tag-name{-->
        <!--vertical-align: middle;-->
        <!--display: inline-block;-->
      <!--}-->
      <!--.el-icon-close {-->
        <!--vertical-align: middle;-->
        <!--/*line-height: 30px;*/-->
        <!--display: inline-block;-->
        <!--width: 16px;-->
        <!--height: 16px;-->
        <!--/*vertical-align: 2px;*/-->
        <!--border-radius: 50%;-->
        <!--text-align: center;-->
        <!--transition: all .3s cubic-bezier(.645, .045, .355, 1);-->
        <!--transform-origin: 100% 50%;-->
        <!--background-color: #b4bccc;-->
        <!--color: #fff;-->
        <!--&:before {-->
          <!--transform: scale(.6);-->
          <!--display: inline-block;-->
          <!--vertical-align: -3px;-->
        <!--}-->
        <!--&:hover {-->
          <!--background-color: #b4bccc;-->
          <!--color: #fff;-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->
