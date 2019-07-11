import { IUser } from '@/store/Session/user.model';

const postLogin = (req, res) => {
  const user: IUser = {
    id: '1',
    username: req.username,
    name: 'Giovanni',
    surname: 'Montenegro',
    role: 'admin',
    access: {
      login: `${new Date().getMilliseconds()}`,
      logout: '0',
    },
  };
  setTimeout(() => res.json(user), 2000);
};

export default {
  'POST /api/auth/login': postLogin,
};
