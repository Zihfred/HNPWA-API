import {useDispatch} from "react-redux";
import { useEffect} from "react";

const useFetch = (actionCreator) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator());
  }, [dispatch,actionCreator])
};

export default useFetch;
