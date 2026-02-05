import {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import HeroBackground from '../components/HomepageFeatures/HeroBackground';
import Translate, {translate} from '@docusaurus/Translate'; // 1. Импорт

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const hasTouchScreen = (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );
    setIsDesktop(!hasTouchScreen);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      {isDesktop && <HeroBackground />}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        <Heading as="h1" className="hero__title" style={{ color: 'white' }}>
          {siteConfig.title}         
        </Heading>
        <p className="hero__subtitle"><Translate id="homepage.tagline">{siteConfig.tagline}</Translate></p>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {/* 2. Перевод кнопки */}
            <Translate id="homepage.visitDocs">Get started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // 3. Перевод мета-тегов
      title={translate({
        message: '{siteTitle} utility',
        id: 'homepage.title',
        description: 'The homepage title',
      }, {siteTitle: siteConfig.title})}
      description={translate({
        message: 'Inbound generator for 3x-ui',
        id: 'homepage.description',
        description: 'The homepage description',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}