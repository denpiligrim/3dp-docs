import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  png: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'Quick Start',
      id: 'homepage.features.quickStart.title',
    }),
    png: '/img/rocket.png',
    description: (
      <Translate id="homepage.features.quickStart.description">
        Install with one command, then connect your 3x-ui nodes through the Web UI.
        Manage subscriptions, clients, and relay servers from one interface.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Flexible Connections',
      id: 'homepage.features.smartObfuscation.title',
    }),
    png: '/img/train.png',
    description: (
      <Translate id="homepage.features.smartObfuscation.description">
        Configure VLESS, VMess, Shadowsocks, Trojan, and Hysteria2 connections.
        Choose nodes, relays, ports, and SNI, and follow background generation in the Journal.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Unified Subscription',
      id: 'homepage.features.unifiedSubscription.title',
    }),
    png: '/img/boat.png',
    description: (
      <Translate id="homepage.features.unifiedSubscription.description">
        Combine connections from multiple nodes in a subscription with a permanent URL.
        Bind 3x-ui clients, view traffic limits, and add Happ or INCY routing profiles.
      </Translate>
    ),
  },
];

function Feature({title, png, description}: FeatureItem) {
  const imageUrl = useBaseUrl(png);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} className={styles.featureSvg} role="img" />
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
