import React from 'react'
import './../App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Table } from 'semantic-ui-react'

var data = [{
    name: "赵本山",
    rate: 10,
    url: "//player.bilibili.com/player.html?aid=19390801&bvid=BV1bW411n7fY&cid=31621681&page=1&start=30"
}, {
    name: "新宝岛",
    rate: 20,
    url: "//player.bilibili.com/player.html?aid=53851218&bvid=BV1j4411W7F7&cid=94198756&page=1"
},{
    name: "卢本伟",
    rate: 30,
    url: "//player.bilibili.com/player.html?aid=18193325&bvid=BV1FW411q7Js&cid=29702838&page=1"
}]

const Top5 = () => (
  <Table >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className='TagHeader'>梗tag</Table.HeaderCell>
        <Table.HeaderCell>Appearing rate</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {data.map(d => (
            <Table.Row>
                <Table.Cell>
                <Header as='h4' image>
                    <a href={d.url}>
                        <Header.Content>
                            {d.name}
                        </Header.Content>
                    </a>
                </Header>
                </Table.Cell>
                <Table.Cell>{d.rate}</Table.Cell>
            </Table.Row>
        ))
        }
    </Table.Body>
  </Table>
)

export default Top5