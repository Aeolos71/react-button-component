import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest // Get all the remaining props (for example event handlers like onClick, onMouseEnter, onMouseLeave etc.)
}) {
  const classes = className(
    // get the individual className assigned to the <Button /> when it is used
    rest.className,

    // Common styles for all buttons
    'flex items-center px-3 py-1.5 shadow-md shadow-slate-300',
    {
      // rounded
      'rounded-full': rounded,

      // outline
      'bg-white': outline,

      // not outline button :hover
      'hover:bg-white':
        !outline && (primary || secondary || success || warning || danger),
    },

    // Button's individual style
    {
      // PRIMARY
      'bg-sky-500 hover:text-sky-500': primary && !outline,
      'text-sky-500 hover:bg-sky-500 hover:text-white': primary && outline,

      // SECONDARY
      'bg-zinc-500 hover:text-zinc-500': secondary && !outline,
      'text-zinc-500 hover:bg-zinc-500 hover:text-white': secondary && outline,

      // SUCCESS
      'bg-emerald-500 hover:text-emerald-500': success && !outline,
      'text-emerald-500 hover:bg-emerald-500 hover:text-white':
        success && outline,

      // WARNING
      'bg-amber-500 hover:text-amber-500': warning && !outline,
      'text-amber-500 hover:bg-amber-500 hover:text-white': warning && outline,

      // DANGER
      'bg-red-500 hover:text-red-500': danger && !outline,
      'text-red-500 hover:bg-red-500 hover:text-white': danger && outline,

      'text-white':
        !outline && (primary || secondary || success || warning || danger),
    }
  );
  return (
    // the ...rest means get all the rest Button props passed from App.js and assign them to the plain button element
    // so we can use any event handler passed to the button
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

/***************************
 * We use the prop-types npm package to check if the other developers passing more than one
 * props (primary, secondary, success, warning, danger) to the button. If yes then
 * it will create a confliction as the button can not be primary and secondary at the same
 * time for example.
 *
 * We create a custom validator
 *
 * (check package documentation at https://www.npmjs.com/package/prop-types)
 *
 * with the name of "checkVariationValue". We pass the destructured props object
 * ({ primary, secondary, success, warning, danger })
 * as parameter.
 ***************************/
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // check if the returned total of the props is more than one
    // The way to check it is to check the returned number of true or false
    // If true returns 1
    // If false returns 0
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      /*
       * if the total is more than one then we have passed true to more than one props
       * and we return an error message:
       *
       * Warning: Failed prop type:
       * Only one of primary, secondary, success, warning, danger can be true
       * at Button (http://localhost:3000/static/js/bundle.js:164:5) at App
       *
       * to the console for the other developers to know that the can have set only one
       * of these props to true.
       */
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};
export default Button;
