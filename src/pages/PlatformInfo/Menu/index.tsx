import ErrorAndLoading from '@/components/ErrorAndLoading'
import ProTable from '@/components/ProTable'
import { PlusOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-components'
import { useRequest } from 'ahooks'
import { Button } from 'antd'
import { generateColumns } from './columns'
import EditMenu from './components/EditMenu'
import type { IList } from './interface'

const ListRequest = () =>
  new Promise<any>((r) => {
    setTimeout(
      () =>
        r({
          total: 3,
          success: true,
          data: [
            {
              id: '1',
              title: '考务管理',
              icon: 'DatabaseOutlined',
              route: '/undergraduate/examination',
              component: '',
              isHidden: false,
              createTime: '2023-02-26 10:20:33',
              children: [
                {
                  id: '3',
                  title: '考务计划',
                  icon: '',
                  route: '/undergraduate/examination/exam-plan',
                  component: 'EmptyPage',
                  isHidden: false,
                  createTime: '2023-02-25 10:20:33',
                },
                {
                  id: '4',
                  title: '试卷批阅',
                  icon: '',
                  route: '/undergraduate/examination/test-paper-marking',
                  component: 'EmptyPage',
                  isHidden: false,
                  createTime: '2023-02-25 10:20:33',
                },
              ],
            },
            {
              id: '2',
              title: '教案管理',
              icon: 'UnorderedListOutlined',
              route: '/undergraduate/lesson-plan',
              component: 'EmptyPage',
              isHidden: false,
              createTime: '2023-02-24 10:20:33',
            },
          ],
        }),
      500,
    )
  })

const Role = () => {
  const { runAsync, loading, error, refresh } = useRequest(ListRequest, {
    manual: true,
  })

  const columns = generateColumns()

  return (
    <PageContainer>
      <ErrorAndLoading
        error={error}
        loading={loading}
        onRetry={refresh}
        spinProps={{ spinning: false }}
      >
        <ProTable<IList>
          columns={columns}
          request={runAsync}
          toolBarRender={(action) => [
            <EditMenu
              key='create'
              refresh={action?.reload}
              trigger={
                <Button type='primary' icon={<PlusOutlined />}>
                  新增菜单
                </Button>
              }
            />,
          ]}
        />
      </ErrorAndLoading>
    </PageContainer>
  )
}

export default Role
