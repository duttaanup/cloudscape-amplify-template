import Layout from "../layout";
import { Container, ContentLayout, Header, Link, SpaceBetween, AnchorNavigation } from '@cloudscape-design/components';
const Home = () => {
    return (<Layout><ContentLayout
        header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Home Page header
            </Header>
        }>
        <Container
            header={
                <Header variant="h2" description="Home Container description">
                    Home Container header
                </Header>
            }
        >
            <SpaceBetween size="m">
                <>Inside Home Page. Click links below to explore navigation</>
                <AnchorNavigation
                    anchors={[{
                        text: "Page 1",
                        href: "/page1",
                        level: 1
                    },
                    {
                        text: "Page 2 - With Authentication",
                        href: "/page2",
                        level: 2
                    },]} />
            </SpaceBetween>
        </Container>
    </ContentLayout></Layout>)
}
export default Home;