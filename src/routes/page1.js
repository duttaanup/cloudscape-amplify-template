import Layout from "../layout";
import { Container, ContentLayout, Header, Link, SpaceBetween } from '@cloudscape-design/components';
const Page1 = () => {
    return (<Layout><ContentLayout
        header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Page1 page header
            </Header>
        }>
        <Container
            header={
                <Header variant="h2" description="Page1 Container description">
                    Page1 Container header
                </Header>
            }
        >
            <SpaceBetween size="m">
                <>Inside Page1</>
            </SpaceBetween>
        </Container>
    </ContentLayout></Layout>)
}
export default Page1;