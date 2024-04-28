import {Typography} from "@mui/material";
export const MuiTypography = ()=>{
    return (
        <div>
            <Typography variant="h1" component="h4">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>
            <br/>
            <br/>
            <Typography variant="subtitle1" >subtitle 1</Typography>
            <Typography variant="subtitle1" >subtitle 1</Typography>
            <Typography variant="body1">In Section 2.5.2 we described the creation of prototypes as a means of helping the
stakeholders move from statements of general objectives and user stories to the level
of detail that developers will need to implement this functionality. Developers may
use the first prototype to prove that their initial architectural design is a feasible
approach to delivering the required functionality while satisfying the customer’s per-
formance constraints. To create an operational prototype suggests that requirements
engineering, software design, and construction all proceed in parallel. This process is
shown in Figure 4.1. This section describes steps that will be used to create the first
prototypes. Details of best practices for software design and construction appear later
in this book.</Typography>
            <Typography variant="body2">Your first task is to identify the features and functions that are most important to
the stakeholders. These will help define the objectives for the first prototype. If the
stakeholders and developers have created a prioritized list of user stories, it should be
easy to confirm which are the most important.
Next, decide how much time will be allowed to create the first prototype. Some
teams may choose a fixed time, such as a 4-week sprint, to deliver each prototype. In
this case, the developers will look at their time and resource estimate and determine
which of the high-priority user stories can be finished in 4 weeks. The team would
then confirm with the stakeholders that the selected user stories are the best ones to
include in the first prototype. An alternative approach would be to have the stakeholde</Typography>
        </div>
    )
}