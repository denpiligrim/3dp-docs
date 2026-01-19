import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

import img1 from '@site/static/img/rocket.png';
import img2 from '@site/static/img/train.png';
import img3 from '@site/static/img/boat.png';

type FeatureItem = {
  title: string;
  png: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'Quick Start',
      id: 'homepage.features.quickStart.title',
    }),
    png: img1,
    description: (
      <Translate id="homepage.features.quickStart.description">
        Install the utility with a single command and get a fully configured auto-generation system. 
        3DP-MANAGER deploys the necessary containers and starts working with your 3x-ui panel immediately.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Smart Obfuscation',
      id: 'homepage.features.smartObfuscation.title',
    }),
    png: img2,
    description: (
      <Translate id="homepage.features.smartObfuscation.description">
        Make your traffic unique. The utility automatically creates 10 connections 
        with different protocols (vless, vmess, shadowsocks, trojan), ports, and transports to avoid blocking.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Unified Subscription',
      id: 'homepage.features.unifiedSubscription.title',
    }),
    png: img3,
    description: (
      <Translate id="homepage.features.unifiedSubscription.description">
        Forget about manual client configuration. All generated connections are combined into a single subscription 
        with a static URL, providing users with stable access and a choice of the best servers.
      </Translate>
    ),
  },
];

function Feature({title, png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={png} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}