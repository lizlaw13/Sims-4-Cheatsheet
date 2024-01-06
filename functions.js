function exact_money(n) {
    return `money ${n}`;
}

function job_promotion(job) {
    return `careers.promote ${job}`;
}

function modify_friendships(your_sim_name, target_sim_name, n) {
    console.log(`modifyrelationship ${your_sim_name} ${target_sim_name} ${n} LTR_Friendship_Main`)
    return `modifyrelationship ${your_sim_name} ${target_sim_name} ${n} LTR_Friendship_Main`;
}

// function modify_relationships(your_sim_first_name, your_sim_last_name, 
//     target_sim_first_name, target_sim_last_name, n) {
// return `modifyrelationship ${your_sim_first_name} ${your_sim_last_name} 
// ${(target_sim_first_name)} ${target_sim_last_name} ${n} LTR_Romance_Main`;
// }

// simplify for those who do not understand (younger demographic)
// eventually be able to create entire packages you can import into your game