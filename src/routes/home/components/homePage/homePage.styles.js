export default theme => ({
       root: {
           display: 'flex',
           flexDirection: 'column',
       },
       topSection: {
          padding: theme.sectionPadding,
          display: 'flex',
       },
       secondSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
       }
})