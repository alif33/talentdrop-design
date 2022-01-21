import JobCategory from "../../../src/components/admin/JobCategory/JobCategory";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <JobCategory></JobCategory>
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})