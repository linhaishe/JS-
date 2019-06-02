function create_updated_collection(collection_a, object_b) {
  let cct = object_b.value;
  for (let item of collection_a) {
    for (let item1 of cct) {
      console.log(cct);
      if (item.key === item1) {
        item.count--;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
