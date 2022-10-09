import React, {useEffect, useState} from "react";
import Layout from '../components/layout'
import {useParams} from 'react-router-dom'
import {useAppContext} from '../store/store'

function View() {
  const [item, setItem] = useState(null);
  const params = useParams(); //parametros de la ruta
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId)
    setItem(book);
  },[])
  if(!item){
    return <Layout>
      <div>Item not Found</div>
    </Layout>
  }
  return <Layout>
    <h2>{item?.title}</h2>
    <div> {item?.cover ? <img src={item?.cover} width="400"/> : ""} </div>
    <div>{item?.author}</div>
    <div>{item?.intro}</div>
    <div>{item?.completed ? 'Leído' : 'Por terminar' }</div>
    <div>{item?.review}</div>
  </Layout>;
}

export default View;
