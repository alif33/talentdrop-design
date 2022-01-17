import Layout from '../src/components/layout';

export default function CompanyDetails() {
  return (
    <Layout>
      <section className="about__company">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="about__company_info">
                <p>about company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
