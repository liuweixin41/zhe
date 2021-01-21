export interface ColumnProps {
  id: number;
  avatar?: string;
  title: string;
  description: string;
}

export const listData: ColumnProps[] = [
  {
    id: 1,
    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1635022258,84940537&fm=26&gp=0.jpg',
    title: '卢艳祖专栏',
    description: '这里是卢艳祖的专栏文章'
  },
  {
    id: 2,
    avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3795297958,1946891908&fm=26&gp=0.jpg',
    title: '沈一专栏',
    description: '这里是沈一的专栏文章'
  },
  {
    id: 3,
    avatar: undefined,
    title: '董肝帝专栏',
    description: '这里是董肝帝的专栏文章'
  },
  {
    id: 4,
    avatar: undefined,
    title: 'test4专栏',
    description: '这里是test4的专栏文章'
  }
]
