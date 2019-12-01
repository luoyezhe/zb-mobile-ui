<template>
  <div class="zb-tree-select">
    <div class="label-container" @click="opened = !opened">
      <div class="label-name">{{name}}</div>
      <div class="label-content">{{getLabel()}}</div>
      <van-icon name="arrow" color="#999999" v-show="!opened" ></van-icon>
      <van-icon name="arrow-down" color="#999999" v-show="opened" ></van-icon>
    </div>
    <transition name="collapse">
      <div class="select-container collapse-container" v-show="opened">
      <div class="pro-container">
        <div
          :class="[
          'item',
          _hasSelected(item) ? 'active' : ''
        ]"
          v-for="(item, index) in inner_items"
          :key="index"
          @click="_changePro(item)"
        >
          {{item.label}}
          <img v-show="_hasSelected(item)" class="active-icon" src="../../assets/images/bulletin/xuanzhongtiaojian@3x.png" alt="">
        </div>
      </div>
      <div class="city-container">
        <div :class="[
            'item',
            _isSelectedAll() ? 'active' : ''
          ]" @click="_selectAll">
          全部
          <img v-show="_isSelectedAll()" class="active-icon" src="../../assets/images/bulletin/xuanzhongtiaojian@3x.png" alt="">
        </div>
        <div
          :class="[
          'item',
          _isSelected(item) ? 'active' : ''
        ]"
          v-for="(item, index) in curProvince.children"
          :key="index"
          @click="_selectItem(item)"
        >
          {{item.label}}
          <img v-show="_isSelected(item)" class="active-icon" src="../../assets/images/bulletin/xuanzhongtiaojian@3x.png" alt="">
        </div>
      </div>

    </div>
    </transition>
  </div>
</template>
<script>
import _ from 'lodash'
import * as dicts from 'constant/dicts.js'
export default {
  name: 'ZbTreeSelect',
  props: {
    name: String,
    value: {
      type: Array,
      default () {
        return []
      }
    },
    dictName: {
      type: String,
      default () {
        return ''
      }
    },
    items: {
      type: [Object, Array],
      default () {
        return []
      }
    },
    dict: {
      type: Object,
      default () {
        return {}
      }
    },
    placeholder: {
      type: String,
      default () {
        return '全部'
      }
    }
  },
  data () {
    return {
      selected: [],
      opened: false,
      inner_items: [],
      curProvince: {},
      municipality: [],
      // 父键的长度
      parentLength: 0,
      // 子键的长度
      childLength: 0
    }
  },
  mounted () {
    this.initComponent()
    this.initValue()
  },
  methods: {
    initComponent () {
      /*
      * {
      *   100100: {
      *     value: '100100',
      *     label: '北京市',
      *     children: [
      *       {
      *         value: '100101',
      *         label: '东城区'
      *       }
      *     ]
      *   }
      * }
      * */
      let that = this
      that.inner_items = []
      // 哈希排序一下列表
      if (_.isObject(that.items)) {
        // let _sortItems = []
        // Object.keys(that.items).sort(function (item1, item2) {
        //   return that.items[item1].label.localeCompare(that.items[item2].label)
        // }).forEach(key => {
        //   that.inner_items.push(that.items[key])
        // })
        Object.keys(that.items).forEach(key => {
          that.inner_items.push(that.items[key])
        })
      } else {
        that.inner_items = that.items
      }
      that.curProvince = that.inner_items[0]
      that.parentLength = that.curProvince.value && that.curProvince.value.length
    },
    getLabel () {
      return _.map(this.selected, (value) => dicts[this.dictName][value]).join('、') || this.placeholder
    },
    initValue () {
      // 避免引用传递
      this.selected = this.value ? this.value.concat([]) : []
      this.opened = false
    },
    _selectAll () {
      const { value } = this.curProvince
      let _index = this.selected.indexOf(value)
      if (_index >= 0) {
        this.selected.splice(_index, 1)
        return
      }
      const start = value.substr(0, this.parentLength)
      this.selected = _.filter(this.selected, (select) => {
        return select.substr(0, this.parentLength) !== start
      })
      this.selected.push(value)
    },
    _changePro (item) {
      this.curProvince = item
    },
    _selectItem (item) {
      if (this._isSelected(item)) {
        this._removeSelect(item)
      } else {
        this._addSelect(item)
      }
    },
    _addSelect (item) {
      this._removeParentSelect()
      this.selected.push(item.value)
    },
    _removeSelect (item) {
      let _value = item.value
      let i = this.selected.indexOf(_value)
      if (i > -1) {
        this.selected.splice(i, 1)
      }
    },
    _isSelected (item) {
      return this.selected.includes(item.value)
    },
    _isSelectedAll () {
      const { value } = this.curProvince
      return this.selected.includes(value)
    },
    _removeParentSelect () {
      const { value } = this.curProvince
      let _index = this.selected.indexOf(value)
      if (_index >= 0) {
        this.selected.splice(_index, 1)
      }
    },
    _hasSelected (item) {
      const { parentLength } = this
      let _start = item.value.substr(0, parentLength)
      return _.some(this.selected, (item) => {
        return item.substr(0, parentLength) === _start
      })
    }
  },
  watch: {
    selected (val) {
      this.$emit('input', val)
    },
    value (val) {
      console.log('multistage-selector', val)
      if (val !== this.selected) {
        this.initValue()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../index";
</style>
