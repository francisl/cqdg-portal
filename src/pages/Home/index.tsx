import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Bar } from '@nivo/bar';
import { Pie } from '@nivo/pie';
import { Button } from 'antd';
import { t } from 'locales/utils';
import { isAuthenticated } from 'providers/Keycloak/keycloak';
import { getHomeStats } from 'services/api';

import CardContainerNotched from 'components/Card/CardContainerNotched';
import CardContent from 'components/Card/CardContent';
import CountWithIcon from 'components/CountWithIcon';
import Footer from 'components/Footer';
import Header from 'components/Header';
import CloudIcon from 'components/Icon/Cloud';
import CloudStorageIcon from 'components/Icon/CloudStorage';
import DataIcon from 'components/Icon/Data';
import DatabaseIcon from 'components/Icon/Database';
import DocIcon from 'components/Icon/Doc';
import DonorIcon from 'components/Icon/Donor';
import ExomeIcon from 'components/Icon/Exome';
import FileIcon from 'components/Icon/File';
import GenomeIcon from 'components/Icon/Genome';
import StorageIcon from 'components/Icon/Storage';
import StudyIcon from 'components/Icon/Study';

import './Home.modules.scss';

const Home = (): React.ReactElement => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getHomeStats();
            setData(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <Header />
            <main className="home">
                <div className="home__contentWrapper">
                    <section className="home__contentWrapper__hero">
                        <div>
                            <div className="description">
                                <h2 className="description__subtitle">{t('home.hero.subtitle')}</h2>
                                <h1 className="description__title">{t('home.hero.title')}</h1>
                                <p>{t('home.hero.text')}</p>
                            </div>
                            <div className="buttons">
                                {!isAuthenticated() ? (
                                    <>
                                        <Button className="buttons__login" type="primary">
                                            {t('home.hero.buttons.connection')}{' '}
                                            <AiOutlineArrowRight className="buttons__login__icon" />
                                        </Button>
                                        <Button className="buttons__create" type="ghost">
                                            {t('home.hero.buttons.account')}
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/files">
                                            <Button
                                                className={`menu-item`}
                                                icon={<DatabaseIcon className="menu-item-icon" />}
                                                type="primary"
                                            >
                                                {t('nav.file.repo')}
                                            </Button>
                                        </Link>
                                        <Link to="/studies">
                                            <Button
                                                className={`menu-item`}
                                                icon={<StorageIcon className="menu-item-icon" />}
                                                type="primary"
                                            >
                                                {t('nav.studies')}
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="data">
                            <CardContainerNotched>
                                <CardContent cardType="header2Column">
                                    <div className="header2Column__header">
                                        <h2>{t('home.hero.data.header')}</h2>
                                        <span>{t('home.hero.data.subtitle')}</span>
                                    </div>
                                    <CountWithIcon Icon={StudyIcon} label={'home.hero.data.groups.study'} total={4} />
                                    <CountWithIcon Icon={DonorIcon} label={'home.hero.data.groups.donor'} total={999} />
                                    <CountWithIcon
                                        Icon={GenomeIcon}
                                        label={'home.hero.data.groups.genome'}
                                        total={102}
                                    />
                                    <CountWithIcon Icon={ExomeIcon} label={'home.hero.data.groups.exome'} total={800} />
                                    <CountWithIcon Icon={FileIcon} label={'home.hero.data.groups.file'} total={15551} />
                                    <CountWithIcon
                                        Icon={CloudStorageIcon}
                                        label={'home.hero.data.groups.size'}
                                        total={897.4}
                                    />
                                </CardContent>
                            </CardContainerNotched>
                        </div>
                    </section>
                    <section className="home__contentWrapper__graphs">
                        <CardContainerNotched className="graph" type="hovered">
                            <CardContent cardType="stack">
                                <h3>{t('home.graphs.graph1.title')}</h3>
                                <Bar
                                    axisBottom={{
                                        tickValues: [0, 20, 40, 60, 80, 100],
                                    }}
                                    colors={({ data }) => data.color}
                                    data={[
                                        { color: '#D06D5E', id: 'Melanoma', value: 38 },
                                        { color: '#36CFC9', id: 'Colon and Rectal Cancer', value: 15 },
                                        { color: '#F759AB', id: 'Pancreatic Cancer', value: 4 },
                                        { color: '#FFB600', id: 'Bladder Cancer', value: 39 },
                                        { color: '#FF7A45', id: 'Liver Cancer', value: 90 },
                                        { color: '#FF7A45', id: 'Endometrial Cancer', value: 17 },
                                        { color: '#08979C', id: 'Breast Cancer', value: 17 },
                                        { color: '#00AEEF', id: 'Kidney Cancer', value: 78 },
                                        { color: '#FF9C6E', id: 'Non-Hodgkin Lymphoma', value: 58 },
                                        { color: '#FF85C0', id: 'Leukemia', value: 18 },
                                    ]}
                                    enableGridX
                                    enableGridY
                                    enableLabel={false}
                                    height={240}
                                    layout="horizontal"
                                    margin={{ bottom: 20, left: 125, right: 110, top: 0 }}
                                    padding={0.3}
                                    theme={{
                                        fontSize: 10,
                                        textColor: '#486F90',
                                    }}
                                    width={430}
                                />
                            </CardContent>
                        </CardContainerNotched>
                        <CardContainerNotched className="graph" type="hovered">
                            <CardContent cardType="stack">
                                <h3>{t('home.graphs.graph2.title')}</h3>
                                <Pie
                                    colors={({ data }) => data.color}
                                    data={[
                                        { color: '#FFB600', id: 'Cancer', value: 50 },
                                        { color: '#D06D5E', id: 'Generl health', value: 25 },
                                        { color: '#B9BD31', id: 'Rare disease', value: 25 },
                                    ]}
                                    enableRadialLabels={false}
                                    enableSliceLabels={false}
                                    height={240}
                                    legends={[{ anchor: 'right', direction: 'column', itemHeight: 18, itemWidth: 50 }]}
                                    margin={{ bottom: 0, left: -80, right: 110, top: 0 }}
                                    theme={{
                                        fontSize: 10,
                                        textColor: '#486F90',
                                    }}
                                    width={430}
                                />
                            </CardContent>
                        </CardContainerNotched>
                        <CardContainerNotched className="graph" type="hovered">
                            <CardContent cardType="stack">
                                <h3>{t('home.graphs.graph3.title')}</h3>
                                <Bar
                                    axisBottom={{
                                        tickValues: [0, 20, 40, 60, 80, 100],
                                    }}
                                    colors={({ data }) => data.color}
                                    data={[
                                        { color: '#D06D5E', id: 'Melanoma', value: 38 },
                                        { color: '#36CFC9', id: 'Colon and Rectal Cancer', value: 15 },
                                        { color: '#F759AB', id: 'Pancreatic Cancer', value: 4 },
                                        { color: '#FFB600', id: 'Bladder Cancer', value: 39 },
                                        { color: '#FF7A45', id: 'Liver Cancer', value: 90 },
                                        { color: '#FF7A45', id: 'Endometrial Cancer', value: 17 },
                                        { color: '#08979C', id: 'Breast Cancer', value: 17 },
                                        { color: '#00AEEF', id: 'Kidney Cancer', value: 78 },
                                        { color: '#FF9C6E', id: 'Non-Hodgkin Lymphoma', value: 58 },
                                        { color: '#FF85C0', id: 'Leukemia', value: 18 },
                                    ]}
                                    enableGridX
                                    enableGridY
                                    enableLabel={false}
                                    height={240}
                                    layout="horizontal"
                                    margin={{ bottom: 20, left: 125, right: 110, top: 0 }}
                                    padding={0.3}
                                    theme={{
                                        fontSize: 10,
                                        textColor: '#486F90',
                                    }}
                                    width={430}
                                />
                            </CardContent>
                        </CardContainerNotched>
                    </section>
                    <section className="home__contentWrapper__links">
                        <div className="home__contentWrapper__links--text">
                            <h2>{t('home.cards.text.block.title')}</h2>
                            <p>{t('home.cards.text.block.text')}</p>
                        </div>
                        <div className="home__contentWrapper__links--cards">
                            <Button href="https://docs.qa.cqdg.ferlab.bio/" target="_blank" type="link">
                                <CardContainerNotched className="card-container" type="hover">
                                    <CardContent cardType="stackCenter">
                                        <DocIcon />
                                        <h3>{t('home.cards.card1.title')}</h3>
                                        <p>{t('home.cards.card1.text')}</p>
                                    </CardContent>
                                </CardContainerNotched>
                            </Button>
                            <Button href="https://docs.qa.cqdg.ferlab.bio/dictionary/" target="_blank" type="link">
                                <CardContainerNotched className="card-container" type="hover">
                                    <CardContent cardType="stackCenter">
                                        <DataIcon />
                                        <h3>{t('home.cards.card2.title')}</h3>
                                        <p>{t('home.cards.card2.text')}</p>
                                    </CardContent>
                                </CardContainerNotched>
                            </Button>
                            <Button
                                href="https://docs.qa.cqdg.ferlab.bio/docs/submission/submitting-clinical-data/"
                                target="_blank"
                                type="link"
                            >
                                <CardContainerNotched className="card-container" type="hover">
                                    <CardContent cardType="stackCenter">
                                        <CloudIcon />
                                        <h3>{t('home.cards.card3.title')}</h3>
                                        <p>{t('home.cards.card3.text')}</p>
                                    </CardContent>
                                </CardContainerNotched>
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
