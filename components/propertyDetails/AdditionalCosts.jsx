function AdditionalCosts({ propertyDetails }) {
  return (
    <section>
      <div className="flex flex-col gap-3 mb-4">
        <h3 className="text-2xl md:text-3xl font-bold">
          Comprehensive pricing details
        </h3>
        <p className="text-sm text-neutral-300">
          At Estatein, transparency is key. We want you to have a clear
          understanding of all costs associated with your property investment.
          Below, we break down the pricing for Seaside Serenity Villa to help
          you make an informed decision
        </p>
      </div>
      <div className="bg-neutral-800 p-3 flex items-center gap-4 font-semibold rounded-md mb-4">
        Note
        <span className="font-normal text-neutral-400">
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </span>
      </div>
      <div className="md:flex md:flex-row md:gap-12">
        <div className="mb-4">
          <p className="flex flex-col text-sm text-neutral-500">
            Listing Price{" "}
            <span className="text-xl font-semibold text-neutral-100">
              $1,250,000
            </span>
          </p>
        </div>
        <div className="md:flex-col md:w-full">
          {Object.keys(propertyDetails.prop_additionalCosts).map(
            (costCategory, i) => (
              <ul
                className="px-2 py-4 border-2 border-neutral-800 rounded-md divide-y-[1px] divide-neutral-700 mb-4 md:grid md:grid-cols-2"
                key={i}
              >
                <li className="pb-6 md:col-span-2">
                  <strong className="text-lg">{costCategory}</strong>
                </li>
                {propertyDetails.prop_additionalCosts[costCategory].map(
                  (costItem, i) => (
                    <li key={i} className="flex flex-col gap-2 py-4 px-4">
                      <p className="text-sm text-neutral-400">
                        {costItem.title}
                      </p>
                      <div className="flex gap-3 items-center">
                        <span className="text-lg">
                          {costItem.cost.toLocaleString("en-us", {
                            style: "currency",
                            currency: "EGP",
                          })}
                        </span>
                        <span className="bg-neutral-800 p-2 rounded-lg text-neutral-300 text-sm border-neutral-500 border-[1px]">
                          {costItem.comment}
                        </span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default AdditionalCosts;
