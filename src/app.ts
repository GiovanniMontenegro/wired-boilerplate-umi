import 'animate.css/animate.min.css';
import '@/global.less';
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
