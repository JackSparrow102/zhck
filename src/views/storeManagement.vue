<template lang='html'>
    <div id="index">
        <mu-card-title title="店铺管理" sub-title="商品管理"></mu-card-title>
        <mu-container>
            <mu-paper :z-depth="1">
                <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 3)">
                
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">{{scope.row.fat}}</td>
                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td><mu-button color="primary">Primary</mu-button></td>
                </mu-data-table>
            </mu-paper>
        </mu-container>
    
    
    </div> 
</template>

<script>
import _ from 'lodash';
export default {
  name: 'index',
  components: {},
  data() {
    return {
     sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: '店铺编号', width: 200, name: 'name' },
          { title: '店铺名称', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: '店铺商品', name: 'fat', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0
          }
      ]
     
    };
  },
  computed: {},
//   created() {
//     this.search();
//   },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  },
};
</script>

<style>

</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
