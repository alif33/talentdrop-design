import { useSelector } from "react-redux";
import Layout from "../Layout";

const Dashboard = () => {
    const { admins } = useSelector(state => state)
    const { admin } = admins
    return (
        <Layout>
            <h1>This is Dashboard {admin?.name}</h1>
        </Layout>
    );
};

export default Dashboard;