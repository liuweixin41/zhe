import { createStore } from 'vuex'
import { listData, IColumnProps } from '../listData'
import { myArticle, IArticleProps } from '../myArticle'
export { IColumnProps } from '../listData'
export { IArticleProps } from '../myArticle'
interface IUserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface IGlobalStore {
  columns: IColumnProps[],
  articles: IArticleProps[],
  user: IUserProps
}

const store = createStore<IGlobalStore>({
  state: {
    columns: listData,
    articles: myArticle,
    user: {
      isLogin: false,
      name: '王二丫',
      columnId: 1,
    }
  },
  mutations: {
    loginByUserName(state) {
      state.user = { ...state.user, isLogin:true, name: '张大会'}
    },
    createArticle(state, newPost) {
      state.articles.push(newPost)
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
