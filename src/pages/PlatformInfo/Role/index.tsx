import ErrorAndLoading from '@/components/ErrorAndLoading'
import ProTable from '@/components/ProTable'
import { PlusOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { Button } from 'antd'
import { generateColumns } from './columns'
import EditRole from './components/EditRole'
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
              name: '角色1',
              description:
                '李淳罡走到大雪坪崖畔，身后是一如他与绿袍女子场景的撑伞男女。她被一剑洞穿心胸时，曾惨白笑言：“天不生你李淳罡，很无趣呢。”李淳罡大声道：“剑来！”徽山所有剑士的数百佩剑一齐出鞘，向大雪坪飞来',
              enable: true,
              createTime: '2023-02-26 10:20:33',
            },
            {
              id: '2',
              name: '角色2',
              description: '',
              enable: false,
              createTime: '2023-02-25 20:12:12',
            },
            {
              id: '3',
              name: '角色3',
              description: '',
              enable: true,
              createTime: '2023-02-25 09:11:43',
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
    <ErrorAndLoading
      error={error}
      loading={loading}
      onRetry={refresh}
      spinProps={{ spinning: false }}
    >
      <ProTable<IList>
        columns={columns}
        request={runAsync}
        // toolBarRender={(action) => [
        //   <EditRole
        //     key='create'
        //     refresh={action?.reload}
        //     trigger={
        //       <Button type='primary' icon={<PlusOutlined />}>
        //         新增角色
        //       </Button>
        //     }
        //   />,
        // ]}
      />
    </ErrorAndLoading>
  )
}

export default Role
