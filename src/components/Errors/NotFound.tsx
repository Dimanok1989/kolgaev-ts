import { Result } from 'antd';

const NotFound = () => {

    return <div className="flex justify-center items-center h-screen">
        <Result
            status="404"
            title="404"
            subTitle="Страница не найдена"
        />
    </div>

}

export default NotFound;