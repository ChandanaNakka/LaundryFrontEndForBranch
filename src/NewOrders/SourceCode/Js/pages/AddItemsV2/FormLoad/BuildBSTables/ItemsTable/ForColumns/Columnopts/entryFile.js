let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="btn btn-danger ">`,
        `<i class="bi bi-trash3"></i>`,
        `</a>`
    ].join('');
};

export { StartFunc };