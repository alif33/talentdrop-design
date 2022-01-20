

import Layout from '../layout';
import styles from './JobDesc.module.css';
import JobDescription from './JobDescription';
import JobInformation from './JobInformation';

export default function JobDesc() {

  return (
    <Layout>
      <section className={styles.job__description}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <JobDescription />
            </div>
            <JobInformation />
          </div>
        </div>
      </section>
    </Layout>
  );
}
