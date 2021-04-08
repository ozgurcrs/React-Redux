import "./App.css";
import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {getUser,addUser} from './store/user/userAction'

function App(props) {
  useEffect(() => {
    props.fillData();
  }, [])

  const addUser2 = (text1,text2,text3) =>{
    const userInfo = {
      image:text1,
      title:text2,
      text:text3
    }
    props.add(userInfo)
  }



  const [text1,setText1] = useState();
  const [text2,setText2] = useState();
  const [text3,setText3] = useState();
  return (
    <div className="App">
              <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} placeholder="image Link"/>
              <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="h1"/>
              <input type="text" value={text3} onChange={(e) => setText3(e.target.value)} placeholder="text"/>
              <button onClick = { () => addUser2(text1,text2,text3)}>Save</button>
      <div className="cards">
        {
          props.user.map((item,index) => {
            return (
              <div className="card" key={index}>
              <img src={item.image} alt="Merhaba" />
              <div className="card-content">
                <div className="card-info">
                  <h1>{item.title}</h1>
                  <p>
                   {item.text}
                  </p>
                </div>
                <div className="card-footer">
                  <div className="user-img">
                    <img src="https://images.unsplash.com/photo-1617852728464-64ed20445c37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                  </div>
                  <div className="user-info">
                    <h3>Özgür Çiriş</h3>
                    <span>02/04/2021</span>
                  </div>
                </div>
              </div>
            </div>
            )
          } )
        }
      
      </div>
    
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.user
}

const mapDispatchToProps = {
  fillData:getUser,
  add:addUser
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
