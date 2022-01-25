import JobDesc from "../../../src/components/client/jobdesc/JobDesc";

const index = ({job}) => {
    return (
        <>
            <JobDesc jobeDetail={job} />
        </>
    );
};

export default index;

export async function getStaticPaths() {
    return {
        paths: [], 
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { companyName } = context.params

    const res = await getData(`/company/slug/${companyName}`)
    console.log(res)
    return {
        props: {
            company: res
        }
    }
}