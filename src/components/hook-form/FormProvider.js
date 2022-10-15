import PropTypes from 'prop-types';

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
    methods: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmmit }) {
    return <form onSubmmit={onSubmmit}>{children}</form>;
}
