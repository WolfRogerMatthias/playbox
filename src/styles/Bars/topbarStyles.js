export const topbarStyles = (theme) => ({
    bar: {
        display: "flex",
        height: '10vh',
        width: '100%',
        background: theme.palette.background.topBar,
        position: 'sticky',
        top: 0,
        alignItems: 'center',
        gap: theme.spacing(1),
        justifyContent: 'center',
    },
    btn: {
        padding: theme.spacing(1, 1.5),
        cursor: 'pointer',
    }
})