
import { adminAuth } from '../../../__lib__/helpers/requireAuthentication';
import Admin from './../../../src/components/admin/index';

const index = () => {
    return (
        <>
            <Admin></Admin>
        </>
    );
};

export default index;

export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})