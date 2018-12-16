import React from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView } from 'antd-mobile';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.pageNo = 1;
    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }


  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
  genData(){
    return fetch('/queryFindArticle',{
      method:"POST",
      headers:{
          'Content-type':'application/json;charset=UTF-8'
      },
      body:JSON.stringify({
          paginationDTO:{
              pageNumber:this.pageNo,
              pageSize:10
          },
          reqDtos:{
              keyword:'',
              articleType:this.props.articleType
          },
          springsign:"B21F39D45FBBF4D1B04BB8D9BD74A513A9C818EA"
      })
  }).then(response=>response.json())
    .then(result=>{
      return result.data
    })
  }
  async componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

      this.rData = await(this.genData())
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
  }

  onEndReached =async (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    this.pageNo++;
    this.rData = [...this.rData, ...await(this.genData(this.pageNo))];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    });
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID} style={{
          height:'1rem'
        }}>
          {rowData.detail.title}
        </div>
      );
    };
    return (<div>
      <ListView
        key={this.state.useBodyScroll ? '0' : '1'}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        useBodyScroll={this.state.useBodyScroll}
        style={this.state.useBodyScroll ? {} : {
          height: this.state.height,
          border: '1px solid #ddd',
          margin: '5px 0',
        }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
        />}
        onEndReached={this.onEndReached}
        pageSize={5}
      />
    </div>);
  }
}


export default Exercise