import './App.css';
import MemberList from './components/MemberList';
import Member from './components/Member';
import NotFound from './components/NotFound';
import MemberRegistration from './components/MemberRegistration';

import { Routes, Route } from 'react-router-dom';
import { ReturnTickets } from './components/ReturnTickets';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route exact path="/" element={<MemberList />} />
        <Route exact path="/member/:member_id" element={<Member />} />
        <Route exact path="/member_registration" element={<MemberRegistration />} />
        <Route path="/return_tickets" element={<ReturnTickets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
