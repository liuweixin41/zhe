import { createStore } from 'vuex'
import { listData, ColumnProps } from '../listData'
import { myArticle, ArticleProps } from '../myArticle'
import axios from 'axios'
export { ColumnProps } from '../listData'
export { ArticleProps } from '../myArticle'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalStore {
  columns: ColumnProps[];
  articles: ArticleProps[];
  user: UserProps;
}

const store = createStore<GlobalStore>({
  state: {
    columns: listData,
    articles: myArticle,
    user: {
      isLogin: false,
      name: '王二丫',
      columnId: 1
    }
  },
  mutations: {
    loginByUserName (state) {
      state.user = { ...state.user, isLogin: true, name: '张大会' }
    },
    createArticle (state, newPost) {
      state.articles.push(newPost)
    },
    fetchcolumns (state, rawData) {
      state.columns = rawData
    }
  },
  actions: {
    fetchColumns (context) {
      axios.get('/columns').then(res => {
        context.commit('fetchcolumns', res.data)
      })
    }
  },
  getters: {
    getColumnByid: (state) => (id: number) => {
      return state.columns.find(c => c.id = id)
    },
    getArticlesById: (state) => (Cid: number) => {
      return state.articles.filter(a => a.columnId = Cid)
    }
  }
})

export default store
