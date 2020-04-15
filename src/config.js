import ErrorHunter from 'error_hunter'

ErrorHunter.config(process.env.APP_NAME,process.env.TOKEN);
export default ErrorHunter
