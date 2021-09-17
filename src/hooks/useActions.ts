import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {allActionsCreators} from '../store/actions-creators';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionsCreators,dispatch)
}