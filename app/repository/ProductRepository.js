const {EntityRepository} = require('wetland');

class ProductRepository extends EntityRepository {
  findDepleted() {
    return this.find({stock: 0});
  }

  findAbundant() {
    return this.getQueryBuilder('p')
      .select('p')
      .where({'p.stock': {'>': 4}})
      .getQuery()
      .getResult();
  }
}

module.exports = ProductRepository;
