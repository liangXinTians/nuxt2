<template>
  <div class="home">
    <div class="product-nav">
      <ul>
        <li><a href="" @click="$event.preventDefault(); $router.push('/productTest/1')" class="clear">Download
            Center</a>
        </li>
        <li><a href="" @click="$event.preventDefault(); $router.push('/productTest/2')" class="clear">Free Sex Toy
            Testing</a></li>
        <li><a href="" @click="$event.preventDefault(); $router.push('/productTest/3')" class="clear">To Experience The
            Product</a>
        </li>
        <li><a href="" @click="$event.preventDefault(); $router.push('/productTest/4')" class="clear">The Comments
            Section</a></li>
      </ul>
    </div>

    <div class="product-page">
      <div class="product-image-viewer">
        <!-- 左侧缩略图列表 -->
        <div class="thumbnail-container" v-if="detail.images && detail.images.length > 0">
          <!-- 上滑按钮 -->
          <div class="scroll-button scroll-up" :class="{ disabled: scrollTop <= 0 }" @click="scrollThumbnails('up')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14L12 9L17 14" stroke="#666" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>

          <!-- 缩略图列表容器 -->
          <div class="thumbnail-list-wrapper" ref="thumbWrapper">
            <div class="thumbnail-list" ref="thumbList" :style="{ transform: `translateY(-${scrollTop}px)` }">
              <div v-for="(img, index) in detail.images" :key="index" class="thumbnail-item"
                :class="{ active: currentIndex === index }" @click="currentIndex = index">
                <img :src="'/file' + img" :alt="`Product view ${index + 1}`" class="thumbnail-img">
              </div>
            </div>
          </div>

          <!-- 下滑按钮 -->
          <div class="scroll-button scroll-down" :class="{ disabled: scrollTop >= maxScrollTop }"
            @click="scrollThumbnails('down')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="#666" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        <!-- 中央主图区域容器 -->
        <div class="main-image-section">
          <!-- 中央主图区域 -->
          <div class="main-image-container" @mouseenter="showArrows = true" @mouseleave="showArrows = false">
            <!-- 左侧箭头 -->
            <div class="arrow-left" :class="{ show: showArrows }" @click="prevImage" v-if="detail.images && detail.images.length > 1">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L13.4 18.6L7.8 13H20V11H7.8L13.4 5.4L12 4L4 12L12 20Z" fill="#4D4D4D" />
              </svg>
            </div>

            <!-- 主图片拖动区域 -->
            <div class="main-image-wrapper" @mousedown="startDrag" @mousemove="onMouseMove" @mouseup="endDrag"
              @mouseleave="handleMouseLeave" @touchstart="startTouch" @touchmove="onTouchMove" @touchend="endTouch"
              @touchcancel="endTouch" ref="imageWrapper">
              <img v-if="currentImage" :src="'/file' + currentImage" :alt="`Main product view ${currentIndex + 1}`" class="main-image"
                ref="mainImage" @dragstart.prevent>
              <!-- 默认占位图片 -->
              <div v-else class="image-placeholder">
                <span>暂无图片</span>
              </div>

              <!-- 放大镜矩形框 -->
              <div v-if="showMagnifier && windowWidth >= 1200 && currentImage" class="magnifier-box" :style="magnifierBoxStyle"></div>
            </div>

            <!-- 右侧箭头 -->
            <div class="arrow-right" :class="{ show: showArrows }" @click="nextImage" v-if="detail.images && detail.images.length > 1">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.6 5.4L16.2 11H4V13H16.2L10.6 18.6L12 20L20 12L12 4Z" fill="#4D4D4D" />
              </svg>
            </div>
          </div>

          <!-- 底部指示器 -->
          <div class="indicator-dots" v-if="detail.images && detail.images.length > 1">
            <div v-for="(img, index) in detail.images" :key="index" class="dot"
              :class="{ active: currentIndex === index }" @click="currentIndex = index"></div>
          </div>
        </div>

        <!-- 固定位置的放大镜显示区域 -->
        <div v-if="showMagnifier && windowWidth >= 1200 && currentImage" class="magnifier-display" ref="magnifierDisplay">
          <div class="magnifier-title">{{ detail.title || '产品图片' }}</div>
          <div class="magnified-image" :style="magnifiedImageStyle"></div>
        </div>
      </div>

      <div class="product-list">
        <H3 class="product-title">推荐产品</H3>
        <div class="product-item" v-for="(item, index) in dataList" :key="item.id || index"
          @click="$router.push(`/productDetail/${item.id}`)">
          <img v-if="item.images && item.images.length > 0" :src="'/file' + item.images[0]" alt="product">
          <div v-else class="product-placeholder">暂无图片</div>
          <div class="product-content">{{ item.title || '无标题' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "ProductImageViewer",
  data () {
    return {
      currentIndex: 0, // 当前选中的图片索引
      showArrows: false, // 控制箭头显示
      scrollTop: 0, // 缩略图滚动位置
      maxScrollTop: 0, // 最大滚动距离
      windowWidth: 0, // 窗口宽度

      // 拖动相关
      isDragging: false,
      dragStartX: 0,
      dragThreshold: 50, // 拖动阈值

      // 触摸相关
      isTouching: false,
      touchStartX: 0,
      touchStartTime: 0,

      // 放大镜相关
      showMagnifier: false,
      mouseX: 0,
      mouseY: 0,
      magnifierWidth: 290, // 放大镜矩形框宽度
      magnifierHeight: 200, // 放大镜矩形框高度
      magnifierScale: 2.5, // 放大倍数

      // 初始化数据
      dataList: [],
      detail: {
        images: [],
        title: ''
      },
      params: {
        pageNum: 1,
        pageSize: 5,
        lang: Cookies.get('user_lang')
      },
      loading: false
    }
  },

  computed: {
    // 当前显示的图片
    currentImage () {
      // 确保 detail.images 存在且不为空
      if (this.detail && this.detail.images && this.detail.images.length > 0) {
        // 确保 currentIndex 在有效范围内
        const index = Math.max(0, Math.min(this.currentIndex, this.detail.images.length - 1))
        return this.detail.images[index]
      }
      // 没有图片时返回空字符串
      return ''
    },

    // 放大镜矩形框样式
    magnifierBoxStyle () {
      if (!this.showMagnifier) return {}

      const halfWidth = this.magnifierWidth / 2
      const halfHeight = this.magnifierHeight / 2
      return {
        left: `${this.mouseX - halfWidth}px`,
        top: `${this.mouseY - halfHeight}px`,
        width: `${this.magnifierWidth}px`,
        height: `${this.magnifierHeight}px`
      }
    },

    // 放大镜显示区域的背景图片样式
    magnifiedImageStyle () {
      if (!this.showMagnifier || !this.currentImage) return {}

      const mainImage = this.$refs.mainImage
      if (!mainImage) return {}

      // 获取图片原始尺寸和显示尺寸
      const imageRect = mainImage.getBoundingClientRect()
      const naturalWidth = mainImage.naturalWidth
      const naturalHeight = mainImage.naturalHeight

      // 计算尺寸比例
      const scaleX = naturalWidth / imageRect.width
      const scaleY = naturalHeight / imageRect.height

      // 计算放大镜在图片中的相对位置（像素）
      const positionX = this.mouseX * scaleX
      const positionY = this.mouseY * scaleY

      // 计算背景图片的位置
      const bgPosX = -(positionX * this.magnifierScale - this.magnifierWidth / 2)
      const bgPosY = -(positionY * this.magnifierScale - this.magnifierHeight / 2)

      return {
        backgroundImage: `url('/file${this.currentImage}')`,
        backgroundSize: `${naturalWidth * this.magnifierScale}px ${naturalHeight * this.magnifierScale}px`,
        backgroundPosition: `${bgPosX}px ${bgPosY}px`,
        backgroundRepeat: 'no-repeat'
      }
    }
  },

  async mounted () {
    const id = this.$route.params.pathMatch
    console.log(this.$route, '路由参数')
    
    // 添加加载状态
    this.loading = true
    
    try {
      await this.getDetail(id)
      await this.getList()
    } catch (error) {
      console.error('页面初始化失败:', error)
    } finally {
      this.loading = false
    }
    
    this.windowWidth = window.innerWidth
    this.calculateScrollLimits()
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    // 获取产品详情 - 添加错误处理
    async getDetail (id) {
      try {
        const response = await this.$axios.get(
          `${this.$config.apiBaseUrl}/product-test/selectInfoById/${id}`
        )
        console.log(response, '详情响应')
        
        const data = response.data.data
        
        // 检查数据是否存在
        if (data) {
          // 安全地处理图片数组
          let images = []
          if (data.imageUrl && typeof data.imageUrl === 'string') {
            images = data.imageUrl.split(',')
              .map(img => img.trim())
              .filter(img => img.length > 0) // 过滤空字符串
          }
          
          this.detail = {
            ...data,
            images: images
          }
          
          // 重置当前索引以防超出范围
          if (this.currentIndex >= images.length) {
            this.currentIndex = 0
          }
        } else {
          throw new Error('未获取到有效数据')
        }

      } catch (error) {
        console.error('获取产品详情失败:', error)
        // 设置默认值以防止模板报错
        this.detail = {
          images: [],
          title: '加载失败',
          imageUrl: ''
        }
      }
    },

    // 获取产品列表 - 添加错误处理
    async getList () {
      try {
        const response = await this.$axios.get(
          this.$config.apiBaseUrl + '/product-test/list',
          { params: this.params }
        )
        
        if (response.data && response.data.rows) {
          this.dataList = response.data.rows.map(item => {
            // 安全地处理每个项目的图片
            let images = []
            if (item.imageUrl && typeof item.imageUrl === 'string') {
              images = item.imageUrl.split(',')
                .map(img => img.trim())
                .filter(img => img.length > 0)
            }
            
            return {
              ...item,
              images: images,
              createTime: item.createTime ? item.createTime.split(' ')[0] : '' // 安全地分割时间
            }
          })
        }
      } catch (error) {
        console.error('获取产品列表失败:', error)
        this.dataList = []
      }
    },

    handleResize () {
      this.windowWidth = window.innerWidth
      this.calculateScrollLimits()
    },

    nextImage () {
      if (!this.detail.images || this.detail.images.length === 0) return
      this.currentIndex = (this.currentIndex + 1) % this.detail.images.length
      this.scrollToActiveThumb()
    },

    prevImage () {
      if (!this.detail.images || this.detail.images.length === 0) return
      this.currentIndex = this.currentIndex === 0 ? this.detail.images.length - 1 : this.currentIndex - 1
      this.scrollToActiveThumb()
    },

    // 鼠标拖动相关方法
    startDrag (e) {
      this.isDragging = true
      this.dragStartX = e.clientX
      this.showMagnifier = false // 拖动时隐藏放大镜
    },

    onMouseMove (e) {
      if (this.windowWidth < 1200) {
        this.showMagnifier = false
        return
      }

      if (this.isDragging || this.isTouching) {
        // 拖动或触摸模式下不显示放大镜
        this.showMagnifier = false
        return
      }

      // 检查鼠标是否在图片上
      const mainImage = this.$refs.mainImage
      const wrapper = this.$refs.imageWrapper

      if (mainImage && wrapper && this.currentImage) {
        const imageRect = mainImage.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()

        const isOverImage =
          e.clientX >= imageRect.left &&
          e.clientX <= imageRect.right &&
          e.clientY >= imageRect.top &&
          e.clientY <= imageRect.bottom

        if (isOverImage) {
          // 计算鼠标相对于图片的位置
          this.mouseX = e.clientX - imageRect.left
          this.mouseY = e.clientY - imageRect.top

          // 限制放大镜框在图片范围内
          const halfWidth = this.magnifierWidth / 2
          const halfHeight = this.magnifierHeight / 2
          const imageWidth = imageRect.width
          const imageHeight = imageRect.height

          // 确保放大镜框不超出图片边界
          this.mouseX = Math.max(halfWidth, Math.min(imageWidth - halfWidth, this.mouseX))
          this.mouseY = Math.max(halfHeight, Math.min(imageHeight - halfHeight, this.mouseY))

          this.showMagnifier = true

          // 定位放大镜显示区域到图片右侧
          this.$nextTick(() => {
            const magnifierDisplay = this.$refs.magnifierDisplay
            if (magnifierDisplay) {
              const displayRect = magnifierDisplay.getBoundingClientRect()
              const viewportWidth = window.innerWidth

              // 计算理想的左侧位置（图片右边 + 间距）
              let leftPosition = imageRect.right + 20

              // 如果超出视窗右边，则调整到图片左侧
              if (leftPosition + displayRect.width > viewportWidth - 20) {
                leftPosition = imageRect.left - displayRect.width - 20
              }

              // 确保不超出视窗左边
              leftPosition = Math.max(20, leftPosition)

              // 垂直居中对齐到鼠标位置
              const topPosition = Math.max(20, Math.min(
                window.innerHeight - displayRect.height - 20,
                e.clientY - displayRect.height / 2
              ))

              magnifierDisplay.style.left = `${leftPosition}px`
              magnifierDisplay.style.top = `${topPosition}px`
            }
          })
        } else {
          this.showMagnifier = false
        }
      }
    },

    endDrag (e) {
      if (!this.isDragging) return

      const dragDistance = e.clientX - this.dragStartX

      // 根据拖动距离和方向切换图片
      if (Math.abs(dragDistance) > this.dragThreshold) {
        if (dragDistance > 0) {
          // 向右拖动，显示上一张图片
          this.prevImage()
        } else {
          // 向左拖动，显示下一张图片
          this.nextImage()
        }
      }

      this.isDragging = false
    },

    handleMouseLeave () {
      this.endDrag({ clientX: this.dragStartX }) // 传递一个默认值防止错误
      this.showMagnifier = false // 鼠标离开时隐藏放大镜
    },

    // 触摸事件处理方法
    startTouch (e) {
      // 防止触摸时触发鼠标事件
      e.preventDefault()

      this.isTouching = true
      this.touchStartX = e.touches[0].clientX
      this.touchStartTime = Date.now()
      this.showMagnifier = false

      // 添加触摸反馈
      if (this.$refs.imageWrapper) {
        this.$refs.imageWrapper.style.transition = 'transform 0.1s ease'
        this.$refs.imageWrapper.style.transform = 'scale(0.98)'
      }
    },

    onTouchMove (e) {
      if (!this.isTouching) return

      // 防止页面滚动
      e.preventDefault()

      const currentX = e.touches[0].clientX
      const deltaX = currentX - this.touchStartX

      // 添加实时的拖动视觉反馈
      if (Math.abs(deltaX) > 10 && this.$refs.imageWrapper) {
        const maxRotation = 5 // 最大旋转角度
        const rotation = Math.max(-maxRotation, Math.min(maxRotation, deltaX / 50))
        this.$refs.imageWrapper.style.transform = `scale(0.98) rotate(${rotation}deg)`
      }
    },

    endTouch (e) {
      if (!this.isTouching) return

      // 重置视觉效果
      if (this.$refs.imageWrapper) {
        this.$refs.imageWrapper.style.transition = 'transform 0.3s ease'
        this.$refs.imageWrapper.style.transform = 'scale(1) rotate(0deg)'
      }

      // 计算滑动距离和时间
      const touchEndX = e.changedTouches[0].clientX
      const touchDistance = touchEndX - this.touchStartX
      const touchDuration = Date.now() - this.touchStartTime

      // 快速滑动检测（提高灵敏度）
      const isQuickSwipe = touchDuration < 300 && Math.abs(touchDistance) > 30
      const isLongSwipe = Math.abs(touchDistance) > this.dragThreshold

      if (isQuickSwipe || isLongSwipe) {
        if (touchDistance > 0) {
          // 向右滑动，显示上一张
          this.prevImage()
        } else {
          // 向左滑动，显示下一张
          this.nextImage()
        }
      }

      this.isTouching = false

      // 清理样式
      setTimeout(() => {
        if (this.$refs.imageWrapper) {
          this.$refs.imageWrapper.style.transition = ''
          this.$refs.imageWrapper.style.transform = ''
        }
      }, 300)
    },

    scrollThumbnails (direction) {
      const scrollStep = 95 // 单次滚动距离 (80px thumbnail + 15px gap)

      if (direction === 'up') {
        this.scrollTop = Math.max(0, this.scrollTop - scrollStep)
      } else {
        this.scrollTop = Math.min(this.maxScrollTop, this.scrollTop + scrollStep)
      }
    },

    calculateScrollLimits () {
      this.$nextTick(() => {
        const wrapper = this.$refs.thumbWrapper
        const list = this.$refs.thumbList

        if (wrapper && list) {
          const wrapperHeight = wrapper.clientHeight
          const listHeight = list.scrollHeight
          this.maxScrollTop = Math.max(0, listHeight - wrapperHeight)
        }
      })
    },

    scrollToActiveThumb () {
      // 自动滚动到当前选中的缩略图
      const itemHeight = 95 // 80px + 15px gap
      const wrapperHeight = this.$refs.thumbWrapper?.clientHeight || 400
      const activeItemTop = this.currentIndex * itemHeight
      const activeItemBottom = activeItemTop + 80

      const visibleTop = this.scrollTop
      const visibleBottom = this.scrollTop + wrapperHeight

      if (activeItemTop < visibleTop) {
        // 如果选中项在可视区域上方，向上滚动
        this.scrollTop = activeItemTop
      } else if (activeItemBottom > visibleBottom) {
        // 如果选中项在可视区域下方，向下滚动
        this.scrollTop = Math.min(this.maxScrollTop, activeItemBottom - wrapperHeight)
      }
    }
  },

  watch: {
    currentIndex () {
      this.scrollToActiveThumb()
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.product-nav {
  // display: flex;
  // justify-content: center;
  padding-top: 90px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #DDDDDD;
  width: 100%;
  margin: 0 auto;



  ul {
    text-align: center;
    margin-bottom: 0;

    li {
      display: inline-block;
      text-align: center;
      position: relative;
      margin: 10px 8px 10px 8px;
      padding: 0 0;
      list-style-type: none;

      &:first-child::before {
        display: none;
      }

      &:before {
        position: absolute;
        content: '';
        width: 1px;
        height: 12px;
        top: 8px;
        left: -10px;
        border-left: 1px solid #DDDDDD;
      }

      a {
        padding: 10px 10px;
        color: #333;
        width: 100%;
        margin: 0 auto;
        font-weight: bold;
        font-size: 18px;

        &:hover,
        &:active {
          color: #ff1c8e;
          text-decoration: none;
        }
      }
    }
  }

}

.product-page {
  display: flex;
  padding: 80px 40px 40px 40px;
  justify-content: space-between;
  width: 100%;

  // 主容器
  .product-image-viewer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 600px;
    position: relative;
    gap: 200px;
    width: 60%;
  }

  // list列表
  .product-list {
    width: 30%;
    // max-width: 450px;
    padding-right: 10vw;

    .product-title {
      line-height: 3;
      font-size: 1.3rem;
      // font-family: 'TENSANS';
      border-bottom: 1px solid #333;
    }

    .product-item {
      cursor: pointer;
      border-bottom: 1px solid #eee;

      img {
        width: 100%;
        aspect-ratio: 1/1;
        /* 1:1 宽高比 */
        object-fit: cover;
      }

      .product-content {
        color: #ff1c8e;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: 0.3s;
        font-size: 14px;
        padding-top: 5px;
        padding-bottom: 2px;
      }

      &:hover {
        .product-content {
          color: #2296a6;
        }
      }
    }
  }

}


// 左侧缩略图容器
.thumbnail-container {
  display: flex;
  flex-direction: column;
  height: 500px; // 固定高度
  flex-shrink: 0;

  .scroll-button {
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(.disabled) {
      background: #eee;
      border-color: #ccc;
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.scroll-up {
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }

    &.scroll-down {
      border-radius: 0 0 4px 4px;
      border-top: none;
    }
  }

  .thumbnail-list-wrapper {
    flex: 1;
    overflow: hidden;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    position: relative;
  }

  .thumbnail-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 0;
    transition: transform 0.3s ease;
  }
}

.thumbnail-item {
  width: 80px;
  height: 80px;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto; // 居中对齐

  &.active {
    border-color: #FF1C8E;
  }

  .thumbnail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover:not(.active) {
    border-color: #ddd;
  }
}

// 中央主图区域容器
.main-image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 30vw;
}

// 中央主图区域
.main-image-container {
  position: relative;

  // 主图片包装器
  .main-image-wrapper {
    position: relative;
    cursor: grab;
    user-select: none;

    // 触摸优化
    touch-action: pan-y;
    /* 允许垂直滚动，禁用水平滚动和缩放 */
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;

    &:active {
      cursor: grabbing;
    }

    .main-image {
      max-width: 584px;
      height: 584px;
      display: block;
      object-fit: cover;

      // 防止图片被选中和拖拽
      pointer-events: none;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
    }

    // 放大镜矩形框
    .magnifier-box {
      position: absolute;
      border: 1px solid #ccc8c8;
      background: rgba(71, 69, 70, 0.1);
      pointer-events: none;
      z-index: 10;
      backdrop-filter: blur(1px);
      box-sizing: border-box;
    }
  }

  // 箭头通用样式
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 50px;
    height: 12.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(245, 245, 245, 0.9);
    opacity: 0;
    backdrop-filter: blur(4px);
    z-index: 15;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    -webkit-transition-delay: .5s;
    transition-delay: .5s;

    &:hover {
      background-color: #000000;
      color: #fff;
      transform: translateY(-50%) scale(1.1);
    }

    &.show {
      opacity: 1;
    }
  }

  // 左侧箭头
  .arrow-left {
    // left: -100px;
    left: calc(-100px - 2vw);
    // right: calc(290px-15vw);
    // left: -100px;
    transform: translateY(-50%) translateX(-20px);

    &.show {
      transform: translateY(-50%) translateX(0);
    }
  }

  // 右侧箭头
  .arrow-right {
    right: calc(-100px - 2vw);

    // right: -100px;
    // right: -100px;
    // right: calc(290px-15vw);
    // 30vw-580px 
    transform: translateY(-50%) translateX(20px);

    &.show {
      transform: translateY(-50%) translateX(0);
    }
  }
}

// 底部指示器
.indicator-dots {
  display: flex;
  gap: 10px;
  margin-top: 20px; // 图片下方间距
  justify-content: center;

  .dot {
    height: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    // 未选中状态：显示长条形，灰色
    width: 24px;
    background: #ddd;

    // 选中状态：长条形，粉红色
    &.active {
      background: #FF1C8E;
      width: 24px;
    }

    &:hover {
      background: #FF1C8E;
      opacity: 0.8;
    }
  }
}

// // 固定位置的放大镜显示区域
// .magnifier-display {
//   position: fixed;
//   // width: 290px;
//   // height: 200px; // 长方形尺寸
//   width: 435px;
//   height: 300px; // 长方形尺寸
//   border: 2px solid #e0e0e0;
//   border-radius: 8px;
//   overflow: hidden;
//   background: #f9f9f9;
//   z-index: 1000;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

//   // 定位在图片容器右侧
//   transform: translateX(20px);

//   .magnifier-title {
//     // background: #f5f5f5;
//     padding: 8px 15px;
//     font-size: 14px;
//     color: #666;
//     // border-bottom: 1px solid #e0e0e0;
//     font-weight: 500;
//     opacity: 0.5;
//     text-align: center;
//   }

//   .magnified-image {
//     width: 100%;
//     // height: calc(100% - 35px);
//     height:100%;
//     // background-color: #fff;
//   }
// }
.magnifier-display {
  position: fixed;
  width: 435px;
  height: 300px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transform: translateX(20px);

  .magnifier-title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px 15px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    // opacity: 0.8;
    text-align: center;
    background-color: rgba(63, 61, 61, 0.7);
    z-index: 1;
  }

  .magnified-image {
    width: 100%;
    height: 100%;
    position: relative;
  }
}

// 响应式适配
@media screen and (max-width: 1200px) {
  .product-image-viewer {
    width: 100% !important;
    flex-direction: column;
    align-items: center !important;
    gap: 60px !important;
    padding: 20px;
    margin-top: 50px !important;


    .thumbnail-container {
      order: 2; // 移动到主图下方
      height: auto;
      max-height: 120px;
      width: 100%;
      max-width: 584px;
      flex-direction: row; // 改为水平布局

      .scroll-button {
        height: 100%; // 高度填满容器
        width: 30px; // 宽度变小

        &.scroll-up {
          border-radius: 4px 0 0 4px;
          border-right: none;
          border-bottom: 1px solid #e0e0e0;

          svg {
            transform: rotate(-90deg); // 旋转箭头
          }
        }

        &.scroll-down {
          border-radius: 0 4px 4px 0;
          border-left: none;
          border-top: 1px solid #e0e0e0;

          svg {
            transform: rotate(90deg); // 旋转箭头
          }
        }
      }

      .thumbnail-list-wrapper {
        flex: 1;
        overflow-x: hidden;
        overflow-y: hidden;
        border: 1px solid #e0e0e0;
      }

      .thumbnail-list {
        flex-direction: row; // 水平排列缩略图
        transform: translateX(0) !important;
        padding: 10px;
        gap: 15px;
        height: 100px; // 固定高度
        overflow-x: auto;
        overflow-y: hidden;
        flex-wrap: nowrap;
      }
    }

    .main-image-section {

      order: 1;
    }
  }

  .product-list {
    display: none;
  }

  .magnifier-display {
    width: 250px;
    height: 170px;
  }
}

/* 992px 以下的适配 */
@media screen and (max-width: 992px) {
  .home {
    .product-nav {
      ul li a {
        font-size: 16px;
        padding: 8px 8px;
      }
    }

    .title {
      font-size: 3.2rem;
      padding: 3rem 0 1rem 0;
    }

    .title-logo-container .title-logo {
      // height: 28px;
      width: 100%;
      margin: 0 auto;

    }

    .product-test {
      margin-top: 40px;

      .grid-container {
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        padding: 15px;
      }

      .product-title {
        font-size: 15px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    .product-nav {
      ul {
        li {
          margin: 8px 6px;

          &:before {
            height: 10px;
            top: 6px;
            left: -8px;
          }

          a {
            font-size: 14px;
            padding: 6px 6px;
          }
        }
      }
    }

    .product-image-viewer {
      padding: 15px;
      gap: 20px;
      margin-top: 50px;

      .main-image-container {

        .arrow-left,
        .arrow-right {
          display: none !important; // 隐藏左右箭头
        }
      }

      .thumbnail-container {
        max-height: 90px;
        display: none !important;

        .thumbnail-item {
          width: 70px;
          height: 70px;
        }

        .scroll-button {
          width: 25px;
        }
      }
    }

    .main-image-wrapper {
      cursor: default; // 移动端不显示抓取光标

      // 增加触摸反馈
      &:active {
        cursor: default;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .thumbnail-item {
    width: 60px;
    height: 60px;
  }

  .main-image-section {
    width: 100% !important;
  }

  .product-image-viewer {
    height: auto !important;
    min-height: 300px !important;
  }

  .main-image {
    // max-width: 100%;
    width: 100% !important;
    height: auto !important;
    // max-height: 400px;
  }

  .thumbnail-container {
    max-height: 80px;
  }

  .magnifier-display {
    width: 200px;
    height: 140px;
  }
}

/* 480px 以下的适配 */
@media screen and (max-width: 480px) {
  .home {
    .product-nav {
      padding: 20px 0;

      ul {
        li {
          // display: block;
          margin: 10px;

          &:before {
            display: none;
          }

          a {
            font-size: 13px;
            padding: 10px;
            display: block;
            width: auto;
            border: 1px solid #DDDDDD;
          }
        }
      }
    }
  }
}
</style>