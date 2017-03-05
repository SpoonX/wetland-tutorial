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

  findDepletedCount() {
    return this.getQueryBuilder('p')
      .select({count: 'p.id'})
      .where({stock: 0})
      .getQuery()
      .getSingleScalarResult();
  }

  findAbundantCount() {
    return this.getQueryBuilder('p')
      .select({count: 'p.id'})
      .where({'p.stock': {'>': 4}})
      .getQuery()
      .getSingleScalarResult();
  }
}

module.exports = ProductRepository;
