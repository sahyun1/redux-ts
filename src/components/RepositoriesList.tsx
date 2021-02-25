import React, {useState} from 'react';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');
  const {searchRepositories} = useActions();
  // const state = useSelector((state)=> state); //similar to map func
  // const state = useTypedSelector((state)=> state.repositories); //similar to map func

  const {data, error, loading} = useTypedSelector((state)=> state.repositories); //similar to map func


  // console.log(state);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);

  }

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e=> setTerm(e.target.value)}/>
      <button>Serach</button>
    </form>

    {error && <h3>{error}</h3>}
    {loading && <h3>Loading..</h3>}
    {!error && !loading && data.map(name=><div key={name}>{name}</div>)}

  </div>
};

export default RepositoriesList;
