import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import ample from '../../assets/ample1.png';
import CardGrid from '../card/CardGrid';
import styles from './JobDesc.module.css';

export default function JobDesc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.job__description}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="job__info">
              <div className={styles.job__title}>
                <h2 className={styles.title}>lead product designer</h2>
                <div className={styles.details}>
                  <p>
                    <span className={styles.schedule}>full time</span>
                    <span className={styles.rate}>$10,000</span>
                    <span className={styles.location}>
                      <i className="fas fa-map-marker-alt"></i>
                      San Fransisco, CA,USA
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.job__descriptions}>
                <h3 className={styles.description__title}>Job Description</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered ltera tion in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn&apos;t
                  anything
                </p>
              </div>
              <div className={styles.key__responsibilites}>
                <h3 className={styles.key__title}>Key Responsibilites</h3>
                <ul>
                  <li>
                    e involved in every step of the product design cycle from
                    discovery to developer handoff and user acceptance
                  </li>
                  <li>
                    Work with BAs, product managers and tech teams to lead the
                    Product Design
                  </li>
                  <li>
                    Maintain quality of the design process and ensure that when
                    designs are translated into code they accurately refl the
                    design specifications.
                  </li>
                  <li>
                    Accurately estimate design tickets during planning sessions.
                  </li>
                  <li>
                    e involved in every step of the product design cycle from
                    discovery to developer handoff and user acceptance.
                  </li>
                </ul>
              </div>
              <div className={styles.skill__experience}>
                <h3 className={styles.skill__title}>Skill & Experience</h3>
                <ul>
                  <li>
                    e involved in every step of the product design cycle from
                    discovery to developer handoff and user acceptance
                  </li>
                  <li>
                    Work with BAs, product managers and tech teams to lead the
                    Product Design
                  </li>
                  <li>
                    Maintain quality of the design process and ensure that when
                    designs are translated into code they accurately refl the
                    design specifications.
                  </li>
                  <li>
                    Accurately estimate design tickets during planning sessions.
                  </li>
                  <li>
                    e involved in every step of the product design cycle from
                    discovery to developer handoff and user acceptance.
                  </li>
                </ul>
              </div>
              <div className="related__job">
                <h2 className={styles.related__job_title}>Related Job</h2>
                <div className="row">
                  <div className="col-12 col-md-6 py-3">
                    <CardGrid />
                  </div>
                  <div className="col-12 col-md-6 py-3">
                    <CardGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="col-md-3 py-3 py-md-0">
            <div className={styles.job__detail_information}>
              <h3 className={styles.information__title}>
                Job Details Information
              </h3>
              <div className={styles.information__box}>
                <i className="far fa-calendar-alt"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Job Position Data</h4>
                  <p>05 January 2022</p>
                </div>
              </div>
              <div className={styles.information__box}>
                <i className="far fa-calendar-alt"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Expiration Data</h4>
                  <p>05 January 2022</p>
                </div>
              </div>
              <div className={styles.information__box}>
                <i className="fas fa-map-marker-alt"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Location</h4>
                  <p>San Francisco, USA</p>
                </div>
              </div>
              <div className={styles.information__box}>
                <i className="far fa-user-circle"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Job Role</h4>
                  <p>Lead Product Designer</p>
                </div>
              </div>
              <div className={styles.information__box}>
                <i className="far fa-clock"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Working Hours</h4>
                  <p>40h/weekly</p>
                </div>
              </div>
              <div className={styles.information__box}>
                <i className="fas fa-dollar-sign"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Rate</h4>
                  <p>$15/hour</p>
                </div>
              </div>
              <div className={styles.information__box}>
                <i className="fas fa-dollar-sign"></i>
                <div className={styles.box__info}>
                  <h4 className={styles.info__title}>Salary</h4>
                  <p>$10000/month</p>
                </div>
              </div>
            </div>
            <div className={styles.apply__job}>
              <button type="submit">apply for this job</button>
            </div>
            <div className={styles.about__company}>
              <h4 className={styles.company__subtitle}>About Company</h4>
              <div className={styles.company__title}>
                <Image src={ample} alt="Ample" />
                <span>Ample Ink</span>
              </div>
              <Link href="/companydetails">
                <a className={styles.company__link}>Full Company Profile</a>
              </Link>
            </div>
            <div className={styles.contact__form}>
              <h3 className={styles.form__title}>Contact Us</h3>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  {...register('name', { required: true, maxLength: 20 })}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail"
                  {...register('email', { required: true, maxLength: 30 })}
                />
                <textarea
                  placeholder="Your Message"
                  {...register('message', { required: true, maxLength: 300 })}
                />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
