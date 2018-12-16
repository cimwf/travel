import React,{Component} from 'react'
import './find.scss'
import randomString from 'random-string'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView } from 'antd-mobile';
class FindTag extends Component {
    constructor(){
        super()
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
        this.pageNo = 1;

        this.state={
            data:[],
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
        }
        this.imgFn = this.imgFn.bind(this)
        this.spanFn = this.spanFn.bind(this)
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

    imgFn(val){
        if(val.detail.displayType === '3'){
            return (
                <div>
                    {
                        val.pictures.map((v)=>{
                            return (
                                <img key={randomString()} src={v.url} alt=""/>
                            )
                        })
                    }
                </div>
            )
        }else{
            return (
                <div className="findImg">
                    <img src={val.pictures[0].url} alt=""/>
                </div>
            )
        }
    }
    spanFn(val){
        if(val.detail.articleTypeCode === '2'){
            return <span>{val.detail.articleType}</span>
        }else if(val.detail.articleTypeCode === '3'){
            return <span className="findColor">{val.detail.articleType}</span>
        }
    }
    render(){
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
                <div className="findTag">
                <ul>
                    {
                        <li key={randomString()}>
                            <h3>{rowData.detail.title}</h3>
                            {
                                this.imgFn(rowData)
                            }
                            {
                                this.spanFn(rowData)
                            }
                            
                        </li>
                    }
                </ul>
            </div>
            );
          };
        return (
            <div>
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
    </div>
            
        )
    }
}

export default FindTag