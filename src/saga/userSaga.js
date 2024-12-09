import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS, setUsers } from '../store/customerReduser';

const fetchUsersFromApi = () =>
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then((res) => res);

function* fetchUsersWorker() {
    const res = yield call(fetchUsersFromApi);
    const json = yield res.json();
    yield put(setUsers(json));
}

export function* fetchUsersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
