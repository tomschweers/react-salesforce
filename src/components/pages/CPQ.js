import React, {Component} from 'react'
import axios from 'axios'
import TreeList, {
  Column,
  ColumnChooser,
  HeaderFilter,
  SearchPanel,
  Selection
} from 'devextreme-react/ui/tree-list'
import testData from '../subcomponents/Data'

const CPQ_URL = 'https://cpq-p10-028.bigmachines.com/rest/v5/customOracle_BomItemDef'
const CPQ_AUTH = 'Basic bndoYWxleTptYWtlaXRoYXBwZW4='

class BOMTable extends Component {
  constructor () {
    super()

    this.state = {
      data: testData
    }
  }

  componentDidMount () {
    axios(CPQ_URL, {headers: {Authorization: CPQ_AUTH}})
      .then(response => {
        console.log('Success!!')
        console.log(response.data.items)

        this.setState({data: response.data.items})
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <button onClick={() => { console.log(this.state.data) }} >Test Button</button>

        <TreeList
          dataSource={this.state.data}
          editing={editingOptions}
          showBorders={true}
          columnAutoWidth={true}
          wordWrapEnabled={true}
          defaultExpandedRowKeys={[1, 2]}
          defaultSelectedRowKeys={[1, 29, 42]}
          keyExpr={'variablename'}
          parentIdExpr={'parentvariablename'}
        >
          <SearchPanel visible={true} width={250} />
          <HeaderFilter visible={true} />
          <Selection mode={'multiple'} />
          <ColumnChooser enabled={true} />

          <Column dataField={'variablename'} caption={'blahhhhhh'} />
          <Column
            dataField={'parentvariablename'}
            visible={false}
          />
          <Column dataField={'rootvariablename'}
            visible={false}
          />
          <Column dataField={'partnumber'} />
          <Column dataField={'itemid'} />
          <Column dataField={'name'} />
          <Column dataField={'itemtype'} />
          <Column dataField={'includedinbaseprice'}
            visible={false}
          />
          <Column dataField={'effectivefrom'} />
          <Column dataField={'effectiveto'} />
          <Column dataField={'salesitem'} />
          <Column dataField={'manufacturingitem'} />
          <Column dataField={'optional'} />
          <Column dataField={'sequencenum'} />
          <Column dataField={'defaultquantity'} />
          <Column dataField={'id'}
            visible={false}
          />

        </TreeList>
      </div>
    )
  }
}

const editingOptions = {
  mode: 'popup',
  allowUpdating: true,
  allowDeleting: true,
  allowAdding: true,
  popup: {
    title: 'Employee Info',
    showTitle: true,
    width: 700,
    position: { my: 'top', at: 'top', of: window }
  }
}

export default BOMTable
