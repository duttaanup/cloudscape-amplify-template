import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Layout from "../layout";
import { Button, Container, ContentLayout, Header, Link, SpaceBetween } from '@cloudscape-design/components';
const Page2 = () => {
    /*
    // Uncomment this section to enable authentication
    
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    const { user, signOut } = useAuthenticator((context) => [context.user, context.signOut]);
    
    */
    return (<Layout><ContentLayout
        header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Page2 page header
            </Header>
        }>
        <Container
            header={
                <Header variant="h2" description="Page2 Container description">
                    Page2 Container header
                </Header>
            }
        >
            <SpaceBetween size="m">
                <>Inside Page2.</>
                <>Uncomment the sections mentioned in page2.js file to enable authentication</>
                {
                    /*
                    // Uncomment this section to enable authentication

                    (authStatus === 'authenticated')?<><>Welcome {user.signInDetails.loginId},</><Button onClick={() => {signOut()}}>Click to Logout</Button></>:"Page will automatically land to login screen."
                    */
                }
            </SpaceBetween>
        </Container>
    </ContentLayout></Layout>)
}
export default Page2;
// Uncomment this section to enable authentication

// export default withAuthenticator(Page2);