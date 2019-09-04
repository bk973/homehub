const drawerWidth = 90;

export default theme => ({
       root: {
           display: 'flex',
       },
       appbar: {
           width: `calc(100% - ${drawerWidth}px)`,
           marginLeft: drawerWidth,
           backgroundColor: '#fff',
           borderBottom: '2px solid #ccc',
           boxShadow: '0 0 0'
       },
       drawer: {
           width: drawerWidth,
           flexShrink: 0,
       },
       drawerPaper: {
           width: drawerWidth,
           backgroundColor: theme.palette.primary.main
      },
      toolbar: theme.mixins.toolbar,
      content: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(3),
  },
  spacer: {
      flexGrow: 1
  }
})