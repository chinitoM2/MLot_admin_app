export async function loadData() {
  try{
    const data = await d3.dsv(",", "../data/orders.csv", (d) => {
      return {
        "txn_id": d["txn_id"], 
        "item_number": d["item_number"],
        "Product_Type": d["Product_Type"],
        "quantity": +d["quantity"],
        "pay_date": d["pay_date"],
        "shipped_date": d["shipped_date"],
        "counties": d["counties"],
        "states": d["states"],
        "cities": d["cities"],
        "PO_cities": d["post office cities"],
        "production_time_final": d["production_time_final"],
        "customer_decision_time_final": d["customer_decision_time_final"]
      };
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}