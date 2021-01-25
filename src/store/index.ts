import { createStore } from 'vuex'
import { listData } from '../listData'
import { myArticle } from '../myArticle'
// import axios from 'axios'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
interface ImageProps {
  _id?: string;
  url?: string;
  createAt?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface ArticleProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createTime: string;
  columnId: number;
}

export interface GlobalStore {
  columns: ColumnProps[];
  articles: ArticleProps[];
  user: UserProps;
}

const store = createStore<GlobalStore>({
  state: {
    columns: [],
    articles: myArticle,
    user: {
      isLogin: true,
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
    }
    // fetchcolumns (state, rawData) {
    //   state.columns = rawData
    // }
  },
  // actions: {
  //   fetchColumns (context) {
  //     axios.get('/columns').then(res => {
  //       context.commit('fetchcolumns', res.data)
  //     })
  //   }
  // },
  getters: {
    getColumnByid: (state) => (id: string) => {
      return state.columns.find(c => c._id === id)
    },
    getArticlesByCid: (state) => (Cid: number) => {
      return state.articles.filter(a => a.columnId === Cid)
    }
  }
})

export default store
